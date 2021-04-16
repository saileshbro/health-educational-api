const axios = require('axios').default

const baseUrl = 'https://healthtools.aarp.org'
exports.commonDrugs = async () => {
  return new Promise((resolve, reject) => {
    const drugResponse = []
    let resolved = 0
    axios.default
      .get(`${baseUrl}/drug-directory?out=json`)
      .then(response => {
        let topDrugs = response.data.topRxDrugs
        let drugsArray = []
        for (let [drug, route] of Object.entries(topDrugs)) {
          drugsArray.push({
            drug,
            route,
          })
        }
        for (const drug of drugsArray) {
          const callUrl = drug.route.includes('?')
            ? `${baseUrl}${drug.route}&out=json`
            : `${baseUrl}${drug.route}?out=json`
          axios.default
            .get(callUrl)
            .then(response => {
              resolved++
              const json = response.data
              const genericName = json.genericName
              const subSections = json.subSections
              let imageUrl = ''
              let brandName = ''
              let dose = ''
              if (
                !(
                  Object.entries(json.imageGroupMap).length === 0 &&
                  json.imageGroupMap.constructor === Object
                )
              ) {
                imageUrl =
                  json.imageGroupMap[Object.keys(json.imageGroupMap)[0]]
                    .pillImages[0].fullImagePath
                brandName =
                  json.imageGroupMap[Object.keys(json.imageGroupMap)[0]]
                    .pillImages[0].brandName
                dose =
                  json.imageGroupMap[Object.keys(json.imageGroupMap)[0]]
                    .pillImages[0].dosage
              }
              const sections = []
              for (const [, object] of Object.entries(subSections)) {
                sections.push(object)
              }
              sections.forEach(section => {
                section.title = section.title
                  .replace(/<[^>]+>/g, '')
                  .replace(/\n/g, '')
              })
              imageUrl = `${baseUrl}/images/${imageUrl}`
              const headerSummary = json.headerSummary

              if (brandName.length > 0) {
                drugResponse.push({
                  brandName,
                  genericName,
                  imageUrl,
                  dose,
                  sections,
                  summary: headerSummary,
                })
              }

              if (resolved == drugsArray.length) {
                return drugResponse
              }
            })
            .then(drugResponse => {
              if (drugResponse) {
                drugResponse.sort((a, b) =>
                  a.brandName < b.brandName ? -1 : 1,
                )
                return resolve(drugResponse)
              }
            })
        }
      })
      .catch(reject)
  })
}
