// This function is the endpoint's request handler.
exports = async function(payload, response) {

  const {kitsPerPage = 20, page = 0} = payload.query;

  let query = {};
  if (payload.query.teamname) {
    query = { $text: { $search: payload.query.teamname } };
  } else if (payload.query.color) {
    query = { $text: { $search: payload.query.color } };
  } else if (payload.query.name) {
    query = { $text: { $search: payload.query.name } };
  }
    
  const collection = context.services.get("mongodb-atlas").db("Kits").collection("other_kits");
  let kitList = await collection.find(query).skip(page*kitsPerPage).limit(kitsPerPage).toArray();

  kitList.forEach(kit => {
    kit._id = kit._id.toString();
  });

  const responseData = {
    kits: kitList,
    page: page.toString(),
    filters: {},
    entries_per_page: kitsPerPage.toString(),
    total_results: kitList.length.toString(),
  };
  
  return responseData;
};