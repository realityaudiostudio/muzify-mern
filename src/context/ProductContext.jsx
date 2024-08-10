import { createContext,useState,useContext } from "react";


const ProductContext = createContext();

export const ProductProvider = ({children})=> {
    const [product,setProduct] = useState(null);

    const proind = (pname,preview,pprice,pdesc,pvid,pimg,pcategory) =>
    {
        setProduct({pname,preview,pprice,pdesc,pvid,pimg,pcategory});
    };
    return (
        <ProductContext.Provider value={{ product, proind }}>
      {children}
    </ProductContext.Provider>
    );
};

export const useProduct = () => useContext(ProductContext);