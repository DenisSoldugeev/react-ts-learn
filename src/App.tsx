import React, { useState } from "react";
import Product from "./componets/Product";
import { useProducts } from "./hooks/products";
import Loader from "./componets/Loader";
import { ErrorMessage } from "./componets/ErrorMessage";
import "./index.css";
import Modal from "./componets/Modal";
import CreateProduct from "./componets/CreateProduct";
import { IProduct } from "./modals";

function App() {
  const [showModal, setShowModal] = useState(false);

  const { products, loading, error, addProduct } = useProducts();

  const createHandler = (product: IProduct) => {
    setShowModal(false);
    addProduct(product);
  };

  return (
    <>
      <div className="container relative mx-auto max-w-2xl pt-5">
        {loading && <Loader />}
        {error && <ErrorMessage error={error} />}
        {products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
        {showModal && (
          <Modal onClose={() => setShowModal(false)} title="Create new product">
            <CreateProduct onCreate={createHandler} />
          </Modal>
        )}
      </div>
      <div className="text-center my-4 fixed top-10 right-10">
        <button
          className="bg-red-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => setShowModal(true)}
        >
          Add product
        </button>
      </div>
    </>
  );
}

export default App;
