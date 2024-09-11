import React, { Suspense } from "react";
import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Categories from "./components/categories/Categories";
import Carousel from "./components/carousel/Carousel";
import Cards from "./components/cards/Cards";
import Center from "./components/center/Center";
import { Route, Routes } from "react-router-dom";
import Home from "./components/home/Home";
import AboutUs from "./components/aboutus/AboutUs";
import Careers from "./components/careers/Careers";
import PermanentJobs from "./components/careers/PermanentJobs";
import ContractJobs from "./components/careers/ContractJobs";
import Notfound from "./components/notfound/Notfound";
import ProductDetail from "./components/products/ProductDetail";
import ProductDetails from "./components/products/ProductDetails";
// import ProductsList2 from "./components/products/ProductsList2";
import Categories1 from "./components/categories/Categories1";
import { MyInterceptor } from "./interceptors/MyInterceptor";
import { MyInterceptor1 } from "./interceptors/MyInterceptor1";
import { MyInterceptor3 } from "./interceptors/MyInterceptor3";
import HttpFetchUsers from "./components/http/HttpFetchUsers";
import UserDetails from "./components/http/UserDetails";
import ProtectedRoute from "./utils/ProtectedRoute";
import userContext from "./utils/userContext";

const ProductsList2 = React.lazy(() =>
  import("./components/products/ProductsList2")
);

export default function App() {
  console.log(userContext);
  MyInterceptor();
  MyInterceptor1();
  MyInterceptor3();
  
  return (
    <div>
      <userContext.Provider value="{name:'Manoranjan', age:22, sal:7000}">
        <Header />
        <Navbar />
        {/* <Categories /> */}
        <Categories1 />
        {/* <Carousel /> */}
        {/* <Cards /> */}
        <Suspense fallback={<h1>Loading...</h1>}>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/home" element={<Home />} />
            <Route exact path="/aboutus" element={<AboutUs />} />
            <Route exact path="/careers" element={<Careers />}>
              <Route index element={<PermanentJobs />} />
              <Route path="permanent" element={<PermanentJobs />} />
              <Route path="contract" element={<ContractJobs />} />
            </Route>
            {/* <Route exact path="/productlist2" element={<ProductsList2 />} /> */}
            <Route
              exact
              path="/productlist2"
              element={
                <ProtectedRoute>
                  <ProductsList2 />
                </ProtectedRoute>
              }
            />
            <Route path="/productdetails/:id" element={<ProductDetails />} />{" "}
            {/* path param */}
            <Route path="/productdetail" element={<ProductDetail />} />{" "}
            {/* Query param */}
            <Route path="/users" element={<HttpFetchUsers />} />
            <Route path="/userDetails/:id" element={<UserDetails />} />
            {/* <Route path="*" element={<Notfound />} /> (No Match Route) */}
          </Routes>
        </Suspense>
        <Center />
        <Footer />
      </userContext.Provider>
    </div>
  );
}
