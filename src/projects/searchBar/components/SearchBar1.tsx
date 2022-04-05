export {}
// import React, { useState } from 'react';
// import { STATES } from '../data/state';
//
// import './SearchBar.css';
//
// const fullListOfStates =
//
// const getFilteredResult = (input: string) => {
//     if (_.isEmpty(input)) {
//         return fullListOfStates;
//     }
//     // const processedInput = _.toLowerCase(input)
//     // use filter directly on fullListOfStates
//     // edges cases
//     const filteredResult = _.reduce(STATES, (currentFilteredResult, state) => {
//         if (_.includes(state, input)) {
//             // split by the input
//             // render leading, input with red color, trailing part
//
//
//             const output = (
//                 <div className='search-result'>
//                     <span>{leadingPart}</span>
//                     <span className='matched-substring'>{input}</span>
//                     <span>{trailingPart}</span>
//                 </div>
//             )
//             currentFilteredResult = _.concat(currentFilteredResult, output);
//         }
//         return currentFilteredResult;
//     }, []);
//     return filteredResult;
// }
//
// export const renderFilteredResult = (filteredResult: string[],) => {
//     if (_.isEmpty(filteredResult)) {
//         return null;
//     }
//     return (
//         <div className='filtered-result-list'>
//             { filteredResult.map(result => {
//                 return <span className='result'>{result}</span>
//             }) }
//         </div>
//     )
// }
//
// export const SearchBar: React.FC = () => {
//     const [input, setInput] = useState('');
//     const filteredResult = getFilteredResult(input);
//     return (
//         <div>
//             <input type='text' className='search-bar'  onChange={(event) => {
//                 setInput(event.target.value)
//             }} />
//             {renderFilteredResult(filteredResult)}
//         </div>
//     );
// };
//
// export default SearchBar;
