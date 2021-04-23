import movieData from './moviesData.json';

const queueReducer = (state, {type, payload}) => {
  
    const isNewIDToQueue = (id) => {
      return state.findIndex(movie => movie.id===id)===-1;
    }
  
    switch(type) {
      case 'ADD':
        if(!isNewIDToQueue(payload.id)) return state;
        const movie = movieData.find(movie => movie.id===payload.id);
        return [...state, movie];
      case 'UP':
        [state[payload.ind], state[payload.ind-1]] = [state[payload.ind-1], state[payload.ind]]
        return [...state];
      case 'DOWN':
        [state[payload.ind], state[payload.ind+1]] = [state[payload.ind+1], state[payload.ind]]
        return [...state];
    case 'REMOVE':
        state.splice(payload.ind, 1);
        return [...state];
      default:
        break;
    }
  }

  export default queueReducer;