import Image from "next/image"

export default async function Bea() {
  const response =await fetch('https://api.thecatapi.com/v1/images/search', {
    cache: 'no-store'
  })
  
  const cat = await response.json()
  console.log(cat[0].url);
  
  
  return (
    <>
    <h1 className="flex justify-center rounded-lg">Bebea</h1>
    <Image className="justify-center" src={cat[0].url} alt = '1' width={400} height={300}/>
    </>
  )
}