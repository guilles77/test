alert("test")

document.querySelector('button').addEventListener('click',getDatos)

async function getDatos () {
    const nomFlia =  document.querySelector('input').value

    try {

        const res = await fetch (`http://localhost:8000/api/flia/${nomFlia}`)
        const data = await res.json()
            console.log(data)
            document.querySelector('h2').innerText = data.birth

        
        
    
    } catch (err) {

        console.log (err)
    }


}