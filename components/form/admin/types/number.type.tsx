import {Form, InputNumber} from 'antd'
import React from 'react'
import {useTranslation} from 'react-i18next'
import {AdminFieldTypeProps} from './type.props'

export const NumberType: React.FC<AdminFieldTypeProps> = props => {
  const { t } = useTranslation()

  return (
    <div>
      <Form.Item
        label={t('type:number:default')}
        name={[props.field.name, 'value']}
        labelCol={{ span: 6 }}
      >
        <InputNumber />
      </Form.Item>
    </div>
  )
}
