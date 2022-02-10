const btn = document.querySelector("#findassetbtn")


function showAssetPrice(price){
    assetClosedprice =document.querySelector("#assetclosedprice")
    assetClosedprice.innerHTML = 'R$ '+Number(price).toFixed([2])
}

function showAssetCode(assetcode){
    showAssetInPage = document.querySelector('#showassetcode')
    showAssetInPage.innerHTML = assetcode
}
const yesterdayIs = () =>{
    const auxDate = new Date()

    const day = ((auxDate.getDate()) > 10 ? (auxDate.getDate()-1) : ('0'+(auxDate.getDate()-1) ))
    const month = ((auxDate.getMonth()+1) <10) ? ('0'+ (auxDate.getMonth()+1) ) : (auxDate.getMonth()+1)
    const year = auxDate.getFullYear()
    const formatDate =  year + '-' + month + '-' + day
    return(formatDate)
}


const getAssetData = (url) =>{
    
    const options ={
        method: 'GET',
        mode: 'cors',
        cache: 'default'
    }
    
    fetch(url, options)
        .then(res => {res.json()
            .then(data =>{ 
                const closedPrice = data['Time Series (Daily)'][yesterdayIs()]['4. close']
                showAssetPrice(closedPrice)
            })    
        })
        .catch(e =>{alert('Coloque um código de ativo válido')})
}

btn.addEventListener("click", (e) => {  
    e.preventDefault()
    
    const asset_code = document.querySelector("#assetcode").value.toUpperCase()
    const apiKey = 'HEY34QLWDAEWILBY'
    const url = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${asset_code}.SA&interval=5min&apikey=${apiKey}`

    showAssetCode(asset_code)
    getAssetData(url)
   
})