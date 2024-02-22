import React from "react";
import { useCrypto } from "../../hooks/useCrypto";
import { CoinInfo } from "../CoinInfo";
import {
  Button,
  DatePicker,
  Divider,
  Form,
  InputNumber,
  Result,
  Select,
  Space,
  Typography,
} from "antd";
import styles from "./addAssetForm.module.scss";

const validateMessages = {
  required: "${label} is required",
  types: {
    number: "${label} is not valid number",
  },
  number: {
    range: "${label} must be between ${min} and ${max}",
  },
};

export const AddAssetForm = () => {
  const [submitted, setSubmitted] = React.useState(false);
  const [coin, setCoin] = React.useState();

  const { crypto, addAsset } = useCrypto();
  const [form] = Form.useForm();
  const assetRef = React.useRef();

  const onFinish = values => {
    const newAsset = {
      id: coin.id,
      amount: values.amount,
      price: values.price,
      date: values.date?.$d ?? new Date(),
    };
    assetRef.current = newAsset;
    setSubmitted(true);
    addAsset(newAsset);
  };

  const handleAmountChange = value => {
    const price = form.getFieldValue("price");

    form.setFieldsValue({
      total: +(value * price).toFixed(2),
    });
  };

  const handlePriceChange = value => {
    const amount = form.getFieldValue("amount");
    form.setFieldsValue({
      total: +(amount * value).toFixed(2),
    });
  };

  if (submitted) {
    return (
      <>
        <Result
          status="success"
          title="New Asset Added"
          subTitle={`Added ${assetRef.current.amount} of ${coin.name} by price ${assetRef.current.price}`}
        />
        <Typography.Text className={styles.exit}>
          Click outside the modal window to close
        </Typography.Text>
      </>
    );
  }

  if (!coin) {
    return (
      <Select
        className={styles.select}
        onSelect={v => setCoin(crypto.find(c => c.id === v))}
        placeholder="Select coin"
        options={crypto.map(coin => ({
          label: coin.name,
          value: coin.id,
          icon: coin.icon,
        }))}
        optionRender={option => (
          <Space>
            <img
              className={styles.icon}
              src={option.data.icon}
              alt={option.data.label}
            />
            {option.data.label}
          </Space>
        )}
      />
    );
  }

  return (
    <Form
      form={form}
      name="basic"
      labelCol={{
        span: 4,
      }}
      wrapperCol={{
        span: 10,
      }}
      initialValues={{
        price: +coin.price.toFixed(2),
      }}
      validateMessages={validateMessages}
      onFinish={onFinish}
    >
      <CoinInfo coin={coin} />
      <Divider />

      <Form.Item
        label="Amount"
        name="amount"
        rules={[
          {
            required: true,
            type: "number",
            min: 0,
          },
        ]}
      >
        <InputNumber
          className={styles.input}
          placeholder="Enter coin amount"
          onChange={handleAmountChange}
        />
      </Form.Item>

      <Form.Item label="Price" name="price">
        <InputNumber
          className={styles.input}
          suffix="$"
          onChange={handlePriceChange}
        />
      </Form.Item>

      <Form.Item label="Date & Time" name="date">
        <DatePicker showTime />
      </Form.Item>

      <Form.Item label="Total" name="total">
        <InputNumber className={styles.input} suffix="$" disabled />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit">
          Add Asset
        </Button>
      </Form.Item>
    </Form>
  );
};
