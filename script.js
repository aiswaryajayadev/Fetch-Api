fetch('https://fakestoreapi.com/products').then((data)=>{
return data.json();
}).then((completedata)=>{
    let data1="";
    completedata.map((values)=>{
        data1+=`<div class="card">
        <h1 class="title">${values.title}</h1>'
            <img src=${values.image} alt="image" class="images" >
            <p><b>Description</b></p><p class="description">${values.description}</p>
            <p><b>Category </b> </p><p class="category">${values.category}</p>
            <p><b>Price</b></p><p class="price">${values.price}</p>
        </h1>
    </div>`
    });
    document.getElementById("cards").innerHTML=data1;
}).catch((err)=>{
    console.log(err);
})