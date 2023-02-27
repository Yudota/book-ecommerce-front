import { useState } from "react";
import { Button, Form, Pagination } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import photo from '../../public/img/test-200x300.jpg';
interface Data {
  id: number;
  tituloLivro: string;
  autor: string;
  imagemLivro: string;
  preco: number;

}

const itemsPerPage = 5;
const makeBook = ({ ...props }: Data): Data => ({
  ...props
})
const BookList = () => {
  const navigate = useNavigate()
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [itemsPerPage, setItemsPerPage] = useState<number>(20);
  const [data, setData] = useState<Data[]>([
    makeBook({ id: 1, tituloLivro: "Item 1", autor: 'teste', imagemLivro: photo, preco: 12.5 }),
    makeBook({ id: 2, tituloLivro: "Item 2", autor: 'teste2', imagemLivro: photo, preco: 21.5 }),
    makeBook({ id: 3, tituloLivro: "Item 2", autor: 'teste2', imagemLivro: photo, preco: 21.5 }),
    makeBook({ id: 4, tituloLivro: "Item 2", autor: 'teste2', imagemLivro: photo, preco: 21.5 }),
    makeBook({ id: 5, tituloLivro: "Item 2", autor: 'teste2', imagemLivro: photo, preco: 21.5 }),
    makeBook({ id: 6, tituloLivro: "Item 2", autor: 'teste2', imagemLivro: photo, preco: 21.5 }),
    makeBook({ id: 7, tituloLivro: "Item 2", autor: 'teste2', imagemLivro: photo, preco: 21.5 }),
    makeBook({ id: 8, tituloLivro: "Item 2", autor: 'teste2', imagemLivro: photo, preco: 21.5 }),
    makeBook({ id: 9, tituloLivro: "Item 2", autor: 'teste2', imagemLivro: photo, preco: 21.5 }),
    makeBook({ id: 10, tituloLivro: "Item 2", autor: 'teste2', imagemLivro: photo, preco: 21.5 }),
    makeBook({ id: 11, tituloLivro: "Item 2", autor: 'teste2', imagemLivro: photo, preco: 21.5 }),
    makeBook({ id: 12, tituloLivro: "Item 2", autor: 'teste2', imagemLivro: photo, preco: 21.5 }),
    makeBook({ id: 13, tituloLivro: "Item 2", autor: 'teste2', imagemLivro: photo, preco: 21.5 }),
    makeBook({ id: 14, tituloLivro: "Item 2", autor: 'teste2', imagemLivro: photo, preco: 21.5 }),
    makeBook({ id: 15, tituloLivro: "Item 2", autor: 'teste2', imagemLivro: photo, preco: 21.5 }),
    makeBook({ id: 16, tituloLivro: "Item 2", autor: 'teste2', imagemLivro: photo, preco: 21.5 }),
    makeBook({ id: 17, tituloLivro: "Item 2", autor: 'teste2', imagemLivro: photo, preco: 21.5 }),
    makeBook({ id: 18, tituloLivro: "Item 2", autor: 'teste2', imagemLivro: photo, preco: 21.5 }),
    makeBook({ id: 19, tituloLivro: "Item 2", autor: 'teste2', imagemLivro: photo, preco: 21.5 }),
    makeBook({ id: 20, tituloLivro: "Item 2", autor: 'teste2', imagemLivro: photo, preco: 21.5 }),

  ]);

  const totalItems = data.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage - 1, totalItems - 1);

  const currentData = data.slice(startIndex, endIndex + 1);

  const handlePageChange = (page: number) => setCurrentPage(page);
  const handleItemsPerPageChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setItemsPerPage(Number(event.target.value));
    setCurrentPage(1);
  };

  return (
    <div className="container p-3">
      <h2 className="fs-1 w-100 y-2 d-flex justify-content-center">Sugestões para você!</h2>
      <div className="vh-50 row justify-content-between mx-5 gap-5">
        {currentData.map(item => (
          <div style={{ cursor: 'pointer' }} onClick={() => {
            navigate('/book')
          }} className="col-2 my-5 " key={item.id}>
            <img className="card-img-top" src='https://picsum.photos/200/300' />
            <div className="card-body">
              <h5 className="card-header card-title">{item.tituloLivro}</h5>
              <p className="card-text">{item.autor}</p>
              <p>R$ {item.preco}</p>
              <Button size='sm' onClick={() => console.log(`Adicionar ação para dispath carrinho de compras: ${item.id}`)} className="btn btn-dark w-100 ">
                Adicionar no carrinho
              </Button>
              <Button size="sm" onClick={() => console.log(`Adicionar ação para dispath carrinho de compras: ${item.id}`)} className="btn btn-primary w-100">Comprar Agora</Button>
            </div>
          </div>
        ))}
        <div className="d-flex align-items-center justify-content-center gap-3">

          <Pagination>
            <Pagination.First onClick={() => handlePageChange(1)} />
            <Pagination.Prev
              onClick={() => handlePageChange(Math.max(currentPage - 1, 1))}
            />

            {Array.from({ length: totalPages }).map((_, index) => (
              <Pagination.Item
                key={index}
                active={index + 1 === currentPage}
                onClick={() => handlePageChange(index + 1)}
              >
                {index + 1}
              </Pagination.Item>
            ))}

            <Pagination.Next
              onClick={() => handlePageChange(Math.min(currentPage + 1, totalPages))}
            />
            <Pagination.Last onClick={() => handlePageChange(totalPages)} />


          </Pagination >
          <span>Itens por Página</span>
          <div className="d-flex align-items-center justify-content-center">
            <Form.Select className="w-100"
              value={itemsPerPage}
              onChange={handleItemsPerPageChange}
            >
              <option value={5}>5</option>
              <option value={10}>10</option>
              <option value={15}>15</option>
              <option value={20}>20</option>
            </Form.Select>
          </div>
        </div>
      </div >
    </div >
  );
};


export default BookList;