// App.jsx
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "./redux/productsSlice/productsSlice";
import { setCurrentPage } from "./redux/paginationSlice/paginationSlice";
import ReactPaginate from "react-paginate";
import "./App.css";

function App() {
  const dispatch = useDispatch();

  const {
    items: products,
    loading,
    error,
  } = useSelector((state) => state.product);

  const { currentPage, itemsPerPage } = useSelector(
    (state) => state.pagination
  );

  const offset = currentPage * itemsPerPage;
  const currentItems = products?.slice(offset, offset + itemsPerPage) || [];
  const pageCount = Math.ceil((products?.length || 0) / itemsPerPage);

  const handlePageClick = ({ selected }) => {
    dispatch(setCurrentPage(selected));
  };

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center mb-6 text-blue-600">
        Məhsullar
      </h1>

      {loading && <p className="text-center">Yüklənir...</p>}
      {error && <p className="text-center text-red-500">Xəta: {error}</p>}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {currentItems.map((product) => (
          <div
            key={product.id}
            className="bg-white p-4 rounded-xl shadow hover:shadow-lg"
          >
            <img
              src={product.image}
              alt={product.title}
              className="h-40 mx-auto object-contain mb-4"
            />
            <h2 className="text-lg font-semibold mb-2">{product.title}</h2>
            <p className="text-gray-700 font-bold">${product.price}</p>
          </div>
        ))}
      </div>

      <ReactPaginate
        previousLabel={"← Əvvəlki"}
        nextLabel={"Sonrakı →"}
        pageCount={pageCount}
        onPageChange={handlePageClick}
        forcePage={currentPage}
        containerClassName="flex justify-center mt-8 space-x-2"
        pageClassName="border rounded"
        pageLinkClassName="px-3 py-1 block cursor-pointer"
        previousClassName="border rounded"
        previousLinkClassName="px-3 py-1 block cursor-pointer"
        nextClassName="border rounded"
        nextLinkClassName="px-3 py-1 block cursor-pointer"
        activeClassName="bg-blue-600 text-white"
        disabledClassName="opacity-50 cursor-not-allowed"
      />
    </div>
  );
}

export default App;
