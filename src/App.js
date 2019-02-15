import React, { Component } from 'react';
import styled from 'styled-components';

import './App.css';

import SelectBtn from './components/selectBtn';
import Posts from './components/posts';

// const VK_URL = 'https://oauth.vk.com/blank.html#access_token=170347fab12cdd95acbd38dccf58d65bc31a150772c663adc40657c08db81daa5d16e0c8f064033b654e8&expires_in=86400&user_id=281487754'; 

const Title = styled.h1`
  font-size: 26px;
  font-weight: 700;
  margin-top: 15px;
  margin-bottom: 30px;
  text-align: center;
`
const Container = styled.div`
  width: 80%;
  margin-left: auto;
  margin-right: auto;
`

const BtnGroup = styled.div`
  display: flex;
  justify-content: space-around;
`

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      select: [
        {name: 'Фантастика', id: 1, active: false, serch: '#фантастика@xfilm'},
        {name: 'Боевик', id: 2, active: false, serch: '#боевик@xfilm'},
        {name: 'Комедия', id: 3, active: false, serch: '#комедия@xfilm'},
        {name: 'Мелодрама', id: 4, active: false, serch: '#мелодрама@xfilm'},
        {name: 'Документальный', id: 5, active: false, serch: '#документальный@xfilm'},
        {name: 'Триллер', id: 6, active: false, serch: '#триллер@xfilm'},
        {name: 'Ужасы', id: 7, active: false, serch: '#ужасы@xfilm'},
        {name: 'Все', id: 8, active: false, serch: ''}
      ],
      data: [],
      term: ''
    }

    this.onUpdateSerch = this.onUpdateSerch.bind(this);
  }

  getPosts = async () => {
    const apiUrl =  await fetch('https://cors-anywhere.herokuapp.com/https://api.vk.com/method/wall.get?owner_id=-26750264&offset=1&count=30&filter=owner&extended=1&access_token=3fe0e4ce3fe0e4ce3fe0e4ce9e3f8853d033fe03fe0e4ce638638073e9c4b48cb8ee25f&v=5.92');
    const dataPosts = await apiUrl.json();
    console.log(dataPosts);
    this.setState(
      this.state.data = dataPosts.response.items,
    );
  }

  onFilter(items, term) {
    if(term.length === 0){
      return items;
    }
    return items.filter((item) => {
      return item.text.indexOf(term) > -1;
    }) 
  }

  onUpdateSerch(term) {
    this.setState({term})
  }

  render() {
    const {data, term} = this.state;
    const visiblePosts = this.onFilter(data, term);

    return (
     <div>
      <Title>Подборка фильмов</Title>
      <Container>
        <BtnGroup>
          {this.state.select.map((item) => (
            <SelectBtn item={item} getPosts={this.getPosts} onUpdateSerch={this.onUpdateSerch} />
          ))}
        </BtnGroup>
        <div> 
          <Posts post={visiblePosts} />
        </div>
      </Container>
     </div>
    );
  }
}

export default App;
