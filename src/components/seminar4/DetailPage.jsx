import { useParams, useNavigate } from 'react-router-dom';

const items = [
  { id: 1, title: 'Статья 1', description: 'Описание статьи 1' },
  { id: 2, title: 'Статья 2', description: 'Описание статьи 2' },
  { id: 3, title: 'Статья 3', description: 'Описание статьи 3' },
];

const DetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const item = items.find((i) => i.id === parseInt(id));

  if (!item) {
    return <div>Элемент не найден</div>;
  }

  const handleGoBack = () => {
    navigate('/');
  };

  return (
    <div>
      <button onClick={handleGoBack}>Назад</button>
      <h1>{item.title}</h1>
      <p>{item.description}</p>
    </div>
  );
};

export default DetailPage;