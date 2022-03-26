import { useState } from 'react';
import { MediumAuthorDataService } from './services/MediumAuthorDataService';
import './style/App.css';
import { Author } from './types/Author';
import { ContentView } from './views/Content';
import { ErrorView } from './views/Error';
import { InitialView } from './views/Initial';
import { LoadingView } from './views/Loading';
import { NoPostsView } from './views/NoPosts';

enum View{
  Loading,
  NoPost,
  Initial,
  Content,
  Error
}

function App() {  
  const [author, setAuthor] = useState<Author>();
  const [postsLoaded, setPostsLoaded] = useState<number>(0);
  const [view, setView] = useState<View>(View.Initial);

  const service = new MediumAuthorDataService();

  const loadData = async () => {
    setView(View.Loading);
    try {
      const authorData = await service.fetchAuthorData(setPostsLoaded);
      
      if (!authorData) {
        setView(View.NoPost);
        return;
      }

      setAuthor(authorData);
      setView(View.Content);
    } catch(e) {
      console.log(e);
      setView(View.Error);
    }
  }

  const renderView = () => {
    switch(view) {
      case View.Content:
        return <ContentView author={author!} />
      case View.Loading:
        return <LoadingView postsLoaded={postsLoaded} />
      case View.NoPost:
        return <NoPostsView />
      case View.Error:
        return <ErrorView />
      default:
        return <InitialView loadData={loadData} />
    }
  }

  return (
      <div className="app">
        {renderView()}
      </div>
    );
}

export default App;
