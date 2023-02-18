import {usePaymentRightsListService} from '@Services/paymentRights/usePaymentRightsServices';
import { useState } from 'react';
import { VALUE_ONE } from '@Const/const';
import ImpiPaymentsArticlesColumns from '@Pages/generals/impiPayments/ImpiPaymentsArticlesColumns';

const DEFAULT_ROW = {
  pariId: 0,
  cantidad: VALUE_ONE,
  paymentRight: null
};

const useImpiPaymentsArticles = ({ onChange, value = [] }) => {
  const { data: paymentRights, isLoading } = usePaymentRightsListService();
  const [articles, setArticles] = useState(value ?? DEFAULT_ROW);

  const onChangeCantidad = (index, valor) => {
    const copyArticles = [...articles];
    copyArticles[index].cantidad = valor;
    setArticles(copyArticles);
    onChange(copyArticles);
  };

  const onChangeArticle = (index, valor, paymentRight) => {
    const copyArticles = [...articles];
    copyArticles[index] = {
      pariId: valor,
      cantidad: VALUE_ONE,
      paymentRight
    };

    setArticles(copyArticles);
    onChange(copyArticles);
  };

  const onAddArticle = () => {
    setArticles((prevState) => [...prevState, { ...DEFAULT_ROW }]);
  };

  const onDeleteArticle = (index) => {
    const newArticles = articles.filter((_item, _index) => index !== _index);
    setArticles(newArticles);
    onChange(newArticles);
  };

  const headers = ['Artículo', 'Cantidad', 'Costo', ''];
  const columns = ImpiPaymentsArticlesColumns({
    onChangeArticle,
    paymentRights,
    onChangeCantidad,
    onDeleteArticle
  });

  return {
    articles,
    isLoading,
    onAddArticle,
    headers,
    columns
  };
};

export default useImpiPaymentsArticles;
