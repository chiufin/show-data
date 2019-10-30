export const newDate = each => {
  let origin = each['date_of_birth'].split('/')
  return new Date(origin[2], origin[1] - 1, origin[0])
}
