import { createContext,useState,useEffect } from "react";

// import { addCollectionAndDocuments } from "../utils/firebase/firebase.utils.js";
import SHOP_DATA from "../shop-data.js";
import { getCategoriesAndDocuments } from "../utils/firebase/firebase.utils.js";

export const CategoriesContext = createContext({
    categoriesMap: {},
});

export const CategoriesProvider = ({ children }) => {
    const [categoriesMap, setCategoriesMap] = useState({});
    // console.log(SHOP_DATA);
    // useEffect(() => {
    //     addCollectionAndDocuments('categories',SHOP_DATA);
    // }, []);


    useEffect(()=>{
        const getCategoriesMap = async ()=>{
            const CategoryMap = await getCategoriesAndDocuments();
            // console.log(CategoryMap);
            setCategoriesMap(CategoryMap);
        };
        getCategoriesMap();
    },[]);
     
    const value = { categoriesMap };
    return (
        <CategoriesContext.Provider value={value}>
            {children}
        </CategoriesContext.Provider>
    )
};

