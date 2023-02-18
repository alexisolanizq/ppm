import IconClose from '@Component/common/icon/IconClose';
import React from 'react';

const ImpiPaymentsArticlesColumns = ({
  onChangeArticle,
  paymentRights,
  onChangeCantidad,
  onDeleteArticle
}) => {
  const onChangeSelect = ({ target: { value } }, index) => {
    const valueInt = parseInt(value, 10);
    const paymentRight = paymentRights.find((f) => f.pariId === valueInt);
    onChangeArticle(index, valueInt, paymentRight);
  };

  const onChangeInput = ({ target: { value } }, index) => {
    const valueInt = Number(value);
    onChangeCantidad(index, valueInt);
  };

  const getCantidad = (pariId, cantidad) => {
    if (pariId !== 0) {
      const { pariPrice } = paymentRights.find(
        (item) => item.pariId === Number(pariId)
      );
      const total = (pariPrice * cantidad).toFixed(2);
      return `$${total}`;
    }

    return `$0.00`;
  };

  return [
    {
      field: 'cantidad',
      render: (item, index) => (
        <select
          value={item.pariId}
          onChange={(event) => onChangeSelect(event, index)}
          className="impiarticles__select"
        >
          <option value="0" disabled>
            Selecciona un artículo
          </option>
          {paymentRights.map((paymentRight) => (
            <option
              key={`particle${paymentRight.pariId}`}
              value={paymentRight.pariId}
            >
              {paymentRight.pariArticleName}
            </option>
          ))}
        </select>
      )
    },
    {
      field: 'cantidad',
      render: (item, index) => (
        <input
          value={item.cantidad}
          onChange={(event) => onChangeInput(event, index)}
          className="impiarticles__number"
          type="number"
        />
      )
    },
    {
      field: 'total',
      render: (item) => getCantidad(item.pariId, item.cantidad)
    },
    {
      field: 'eliminar',
      render: (_item, index) => (
        <IconClose onClick={() => onDeleteArticle(index)} />
      )
    }
  ];
};

export default ImpiPaymentsArticlesColumns;
