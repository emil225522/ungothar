
import { styled } from '@stitches/react'


function Header() {
    return (
        <Wrapper>
            <InnerWrapper>
                <Left>
                    My site
                </Left>


                <Right>
                    <LinkItem> Link one </LinkItem>
                    <LinkItem> Link two</LinkItem>
                </Right>
            </InnerWrapper>
        </Wrapper>
    );
}

const Wrapper = styled('div', {
    margin: 'auto',
    backgroundColor: '#1E5F24',
    padding: '16px 16px',
    boxShadow: '0 4px 4px rgba(0, 0, 0, 0.4)'
});

const InnerWrapper = styled('div', {
    display: 'flex',
    justifyContent: 'space-between',
});

const LinkItem = styled('a', {
    '&:hover': {
        textDecoration: 'underline',
        cursor: 'pointer'
    },
    margin: '0px 8px', 
})



const Right = styled('div', { display: 'flex' });
const Left = styled('div', { display: 'flex' });



export default Header;
