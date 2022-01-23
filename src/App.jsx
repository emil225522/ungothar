
import './App.css';
import Header from './Header';
import { styled } from '@stitches/react'


function App() {
  return (
    <Wrapper className='main-font'>
      <Header />
      <PageHeading>
        My site
      </PageHeading>
      <Text>
        welcome to my site
      </Text>
    </Wrapper>
  );
}

const Wrapper = styled('div', {
  width: '100wv',
  height: '100vh',
  margin: 'auto',
  backgroundColor: 'LightGray'
});

const Text = styled('p', {
  fontSize: '16px'
})

const PageHeading = styled('h1', { margin: 'auto', textAlign: 'center' })

export default App;
