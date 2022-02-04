const words = ["hello", "world"]
const randomNumber = Math.floor(Math.random() * words.length)

export default function GetWords() {
  return (
    words[randomNumber]
  )
}