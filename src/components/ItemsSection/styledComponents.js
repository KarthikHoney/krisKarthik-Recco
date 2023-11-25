import styled from 'styled-components'

export const ListItemsContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: transparent;
  border: 1px solid grey;
  margin-top: 15px;
  margin-left: 55px;
  max-width: 90%;
  border-radius: 5px;
  padding: 5px;
`
export const SearchInput = styled.input`
  border-radius: 20px;
  height: 25px;
  border: none;
`
export const ListItemsHead = styled.div`
  display: flex;
  justify-content: space-around;
  border: 1px solid green;
  margin: 5px;
  padding-left: 30px;
  border-radius: 5px;
`
export const ListItemDetails = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin: 5px;
  padding: 4px;
`

export const Item = styled.li`
  list-style-type: none;
  color: grey;
  font-size: 15px;
  font-family: 'Roboto';
  padding: 5px;
  margin-left: 0px;
`

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid grey;
  border-radius: 5px;
`
export const MainSearchContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
export const PrintContainer = styled.div`
  display: flex;
  margin: 2px;
`
export const AddItem = styled.button`
  border: 1px solid green;
  color: green;
  border-radius: 10px;
  text-align: center;
  margin-right: 25px;
`
export const ItemImages = styled.img`
  height: 25px;
  width: 25px;
`
export const Para = styled.p`
  color: grey;
  font-size: 17px;
  max-width: 10%;
`
