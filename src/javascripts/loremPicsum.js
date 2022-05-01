function getImage(url){
  let request = new XMLHttpRequest()
  request.open("GET", url, false)
  request.send()
  return request.responseText
}

function createImage(imageUrl){
  let image = document.createElement("img")
  image.src = imageUrl
  image.className = 'swiper-slide'
  return image
}

function compressImageUrl(imageUrl){
  let splittedUrl = imageUrl.split('/')
  let formattedUrl = splittedUrl.map((parsedUrl, index) => index === 5 ? '534' : index === 6 ? '325' : parsedUrl)

  let imageUrlformatted = formattedUrl.join('/')
  return imageUrlformatted
}

function main(){
  let data = getImage("https://picsum.photos/v2/list?page=1&limit=4")
  let imagesData = JSON.parse(data)

  imagesData.map((imageData) => {
    let image = createImage(compressImageUrl(imageData.download_url))
    document.getElementById('slider-images').appendChild(image)
  })

}

main()
