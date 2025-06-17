'use client';
import { Button } from "@/components/ui/button";
import { getproduct,createproduct } from "./actions";
import { useEffect,useState } from "react";
import { useForm } from "react-hook-form";

export default function CreatePage() {
  const [person,setPerson] = useState([]);
   const {register,reset,handleSubmit} =useForm();
   async function submit(){
    //console.log("Button is pressed");
    await createproduct();
  }
   async function gettingproduct(){
    const product = await getproduct();
    setPerson(product)
    console.log(product);
  }
    async function afterSubmit(data){
     console.log(data);
     await createproduct(data);
     reset()
     await gettingproduct()
  }
    useEffect(()=>{
    gettingproduct();
},[])
  return (
     <>
  {/* <button onClick={submit}>add in db</button>
<br/>
<button onClick={gettingproduct}>get product</button>
<form onSubmit={handleSubmit(afterSubmit)}>
   <input {...register('name')}/>
   <input {...register('price')}/>
   <input {...register('imageUrl')}/>
  <Button type='submit'>Submit</Button>
 </form> */}

 {/* {
  person.map((index)=>(
    <div key={index.id}>
        name:{index.name}
        price:{index.price}
        imageUrl:{index.imageUrl}
       <br/>
    </div>
  ))
} */}


<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
  {person.map((item) => (
    <div key={item.id} className="border rounded-2xl shadow-lg p-5 bg-white space-y-3">
      <div className="space-y-1">
        <h2 className="text-lg font-semibold text-gray-800">{item.name}</h2>
        <p className="text-sm text-gray-600">Price: ₹{item.price}</p>
        <p className="text-sm text-gray-500 break-all">Image URL: {item.imageUrl}</p>
      </div>
      {item.imageUrl && (
        <img
          src={item.imageUrl}
          alt={item.name}
          className="w-full h-48 object-cover rounded-md border"
          onError={(e) => (e.target.style.display = "none")}
        />
      )}
    </div>
  ))}
</div>

</>
  );
}

{/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
  {person.map((item) => (
    <div key={item.id} className="border rounded-2xl shadow-lg p-5 bg-white space-y-3">
      <div className="space-y-1">
        <h2 className="text-lg font-semibold text-gray-800">{item.name}</h2>
        <p className="text-sm text-gray-600">Price: ₹{item.price}</p>
        <p className="text-sm text-gray-500 break-all">Image URL: {item.imageUrl}</p>
      </div>
      {item.imageUrl && (
        <img
          src={item.imageUrl}
          alt={item.name}
          className="w-full h-48 object-cover rounded-md border"
          onError={(e) => (e.target.style.display = "none")}
        />
      )}
    </div>
  ))}
</div> */}

