import {
  FaCartShopping,
  FaAngleDown,
  FaBowlRice,
  FaPizzaSlice,
  FaMobileButton,
} from 'react-icons/fa6'
import {IoIosArrowForward} from 'react-icons/io'

import {
  HeaderContainer,
  TopHead,
  BottomHead,
  ImageContainer,
  ImagePara,
  List,
  SupplyItemIcon,
  ImgPara,
  SpanItem,
  SupplyItem,
  SupplyItemDetail,
  SupplyList,
  SupplyLists,
  MiddleHead,
  Name,
  NameHead,
  NamePara,
  Icon,
  IconSpecial,
  BackButton,
  ApproveButton,
  ImageItemName,
  Line,
  Supply,
  IconContainer,
  SupplyListContainer,
} from './styledComponents'

const Header = () => (
  <>
    <HeaderContainer>
      <TopHead>
        <ImageContainer>
          <ImgPara>
            R<SpanItem>ee</SpanItem>co
          </ImgPara>
          <ImageItemName>Store</ImageItemName>
          <ImageItemName>Order</ImageItemName>
          <ImageItemName>Analytics</ImageItemName>
        </ImageContainer>
        <ImagePara>
          <List>
            <FaCartShopping />
          </List>
          <List>
            Hello,Karthik <FaAngleDown />
          </List>
        </ImagePara>
      </TopHead>
      <MiddleHead>
        <Name>
          <NamePara>
            Order
            <IoIosArrowForward /> Order32457ABC
          </NamePara>
          <NameHead>ORDER 32457ABC</NameHead>
        </Name>
        <Icon>
          <BackButton>Back</BackButton>
          <ApproveButton>Approve Order</ApproveButton>
        </Icon>
      </MiddleHead>
      <BottomHead>
        <SupplyList>
          <Supply>
            <SupplyItem>Supplier</SupplyItem>
            <SupplyItemDetail>East Coast Fruits & Vegetables</SupplyItemDetail>
          </Supply>
          <Line />
        </SupplyList>
        <SupplyList>
          <Supply>
            <SupplyItem>Shipping Date</SupplyItem>
            <SupplyItemDetail>Thu,Feb 10</SupplyItemDetail>
          </Supply>
          <Line />
        </SupplyList>
        <SupplyListContainer>
          <SupplyLists>
            <Supply>
              <SupplyItem>Total</SupplyItem>
              <SupplyItemDetail>$13,376,56</SupplyItemDetail>
            </Supply>
          </SupplyLists>
          <SupplyLists>
            <Supply>
              <SupplyItem>Category</SupplyItem>
              <SupplyItemIcon>
                <IconContainer>
                  <IconSpecial>
                    <FaBowlRice />
                  </IconSpecial>
                  <IconSpecial>
                    <FaPizzaSlice />
                  </IconSpecial>
                  <IconSpecial>
                    <FaMobileButton />
                  </IconSpecial>
                </IconContainer>
                <IconContainer>
                  <IconSpecial>
                    <FaBowlRice />
                  </IconSpecial>
                  <IconSpecial>
                    <FaPizzaSlice />
                  </IconSpecial>
                  <IconSpecial>
                    <FaMobileButton />
                  </IconSpecial>
                </IconContainer>
                <IconContainer>
                  <IconSpecial>
                    <FaBowlRice />
                  </IconSpecial>
                  <IconSpecial>
                    <FaPizzaSlice />
                  </IconSpecial>
                  <IconSpecial>
                    <FaMobileButton />
                  </IconSpecial>
                </IconContainer>
              </SupplyItemIcon>
            </Supply>
          </SupplyLists>
          <SupplyLists>
            <Supply>
              <SupplyItem>Department</SupplyItem>
              <SupplyItemDetail>300-444-665</SupplyItemDetail>
            </Supply>
          </SupplyLists>
          <Line />
        </SupplyListContainer>
        <SupplyList>
          <Supply>
            <SupplyItem>Status</SupplyItem>
            <SupplyItemDetail>Awaiting for Approval</SupplyItemDetail>
          </Supply>
        </SupplyList>
      </BottomHead>
    </HeaderContainer>
  </>
)

export default Header
