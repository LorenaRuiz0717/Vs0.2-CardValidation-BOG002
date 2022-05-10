import data from './data.js';
const Data=data.result

// console.log(Data)
recorriendoData();
function recorriendoData(){
  let containerProducts=document.getElementsByClassName("container1");
  // containerProducts.innerHTML='';
  for(let i=0; i<Data.length; i++){
    const productos=Data[i].producto;
    const precios=Data[i].precio;
    const imagenes=Data[i].imagen;
    let tarjetaProducto=document.createElement("div");
    let imgProducto=document.createElement("img");
    let containerInfo=document.createElement("div");
    let nombreProducto=document.createElement("h2");
    let precioProducto=document.createElement("h3");
    let linkComprar=document.createElement("a");
    let btnComprar=document.createElement("button");
    let iconCart=document.createElement("i");
    tarjetaProducto.className="producto";
    containerInfo.className="containerInfo";
    btnComprar.className="btnComprar";
    iconCart.className="fas fa-cart-plus"
    containerProducts[0].appendChild(tarjetaProducto);
    tarjetaProducto.appendChild(imgProducto);
    tarjetaProducto.appendChild(containerInfo);
    tarjetaProducto.appendChild(linkComprar)
    containerInfo.appendChild(nombreProducto);
    containerInfo.appendChild(precioProducto);
    linkComprar.appendChild(btnComprar);
    btnComprar.appendChild(iconCart);
    imgProducto.src=imagenes;
    nombreProducto.innerHTML=productos;
    precioProducto.innerHTML='$'+precios;
    btnComprar.innerHTML='Comprar';
    linkComprar.href="./TarjetaCredito.html"
  }

};