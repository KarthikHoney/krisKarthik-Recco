import {CiSearch} from 'react-icons/ci'
import {MdLocalPrintshop} from 'react-icons/md'
import {TiTick} from 'react-icons/ti'
import {RxCross2} from 'react-icons/rx'
import {
  SearchContainer,
  SearchInput,
  ListItemsContainer,
  MainSearchContainer,
  AddItem,
  PrintContainer,
  ListItemsHead,
  Item,
  ItemImages,
  ListItemDetails,
  Para,
} from './styledComponents'

const ItemsSection = () => (
  <>
    <ListItemsContainer>
      <MainSearchContainer>
        <SearchContainer>
          <SearchInput type="search" placeholder="search" />
          <CiSearch />
        </SearchContainer>
        <PrintContainer>
          <AddItem>AddItem</AddItem>
          <MdLocalPrintshop />
        </PrintContainer>
      </MainSearchContainer>
      <ListItemsHead>
        <Item>Product________</Item>
        <Item>Brand________</Item>
        <Item>Price________</Item>
        <Item>Quality________</Item>
        <Item>Total________</Item>
        <Item>Status________</Item>
        <Item>Selection________</Item>
      </ListItemsHead>
      <ListItemDetails>
        <ItemImages src="https://m.media-amazon.com/images/I/61OjKVwwdBL.jpg" />
        <Para>
          The redefinition of the mole in 2019, as being <br /> the amount of
        </Para>
        <Para>Hormonal Black Brand</Para>
        <Para>90.89 / 6* 1LB</Para>
        <Para>8 x 6* 1LB</Para>
        <Para>$36,95</Para>
        <Para>Approved</Para>
        <Para>
          <TiTick />
        </Para>
        <Para>
          <RxCross2 />
        </Para>
        <Para>Edit</Para>
      </ListItemDetails>
      <ListItemDetails>
        <ItemImages src="https://m.media-amazon.com/images/I/61OjKVwwdBL.jpg" />
        <Para>
          The redefinition of the mole in 2019, as being <br /> the amount of
        </Para>
        <Para>Hormonal Black Brand</Para>
        <Para>90.89 / 6* 1LB</Para>
        <Para>8 x 6* 1LB</Para>
        <Para>$36,95</Para>
        <Para>Approved</Para>
        <Para>
          <TiTick />
        </Para>
        <Para>
          <RxCross2 />
        </Para>
        <Para>Edit</Para>
      </ListItemDetails>
      <ListItemDetails>
        <ItemImages src="https://m.media-amazon.com/images/I/61OjKVwwdBL.jpg" />
        <Para>
          The redefinition of the mole in 2019, as being <br /> the amount of
        </Para>
        <Para>Hormonal Black Brand</Para>
        <Para>90.89 / 6* 1LB</Para>
        <Para>8 x 6* 1LB</Para>
        <Para>$36,95</Para>
        <Para>Approved</Para>
        <Para>
          <TiTick />
        </Para>
        <Para>
          <RxCross2 />
        </Para>
        <Para>Edit</Para>
      </ListItemDetails>
      <ListItemDetails>
      <ItemImages src="https://m.media-amazon.com/images/I/61OjKVwwdBL.jpg" />
        <Para>
          The redefinition of the mole in 2019, as being <br /> the amount of
        </Para>
        <Para>Hormonal Black Brand</Para>
        <Para>90.89 / 6* 1LB</Para>
        <Para>8 x 6* 1LB</Para>
        <Para>$36,95</Para>
        <Para>Approved</Para>
        <Para>
          <TiTick />
        </Para>
        <Para>
          <RxCross2 />
        </Para>
        <Para>Edit</Para>
      </ListItemDetails>
      <ListItemDetails>
        <ItemImages src="https://m.media-amazon.com/images/I/61OjKVwwdBL.jpg" />
        <Para>
          The redefinition of the mole in 2019, as being <br /> the amount of
        </Para>
        <Para>Hormonal Black Brand</Para>
        <Para>90.89 / 6* 1LB</Para>
        <Para>8 x 6* 1LB</Para>
        <Para>$36,95</Para>
        <Para>Approved</Para>
        <Para>
          <TiTick />
        </Para>
        <Para>
          <RxCross2 />
        </Para>
        <Para>Edit</Para>
      </ListItemDetails>
    </ListItemsContainer>
  </>
)
export default ItemsSection
