/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable no-underscore-dangle */
import React from 'react';

import '../../../Styles/General.css';

import CategoryServce from '../../../../services/CategoryServce';

const reducer = (state, action) => {
  switch (action.type) {
    case 'init':
      return {
        ...state,
        allCategories: action.payload,
      };
    case 'deleteCategory':
      return {
        ...state,
        allCategories: state.allCategories.filter(
          (category) => category.catName !== action.payload
        ),
      };
      default :
      return state
  }

};
export default function AllCategories() {
  // css
  const catImageCss = {
    // height:"100px",
    width: '100px',
  };

  const [state, dispatch] = React.useReducer(reducer, {
    allCategories: [],
  });

  /**
   * useEffect
   */

  React.useEffect(() => {
    CategoryServce.allCatgories()
      .then((data) => {
        dispatch({ type: 'init', payload: data.payload });
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  //  operations
  const deleteCategory = (catName) => {
    console.log(catName);
    CategoryServce.deleteCatgeory(catName)
      .then((res) => {
        if(res.success)  dispatch({ type: 'deleteCategory', payload: catName });    
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const editCategory = (catName) => {
    console.log(catName);
  };
  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th className="text-12" scope="col">
              Name
            </th>
            <th className="text-12" scope="col">
              Description
            </th>
            <th className="text-12" scope="col">
              Image
            </th>
            <th className="text-12" scope="col">
              Operations
            </th>
          </tr>
        </thead>
        <tbody>
          {state.allCategories.map((item) => {
            return (
              <tr key={item._id}>
                <th className="text-12">{item.catName}</th>
                <td className="text-12 ">{item.catDescription}</td>
                <td className="text-12">
                  <img
                  alt=''
                    className="img-fluid"
                    style={catImageCss}
                    src={`http://localhost:5000/${  item.catImagePath}`}
                  />
                </td>
                <td
                  className="flex-row text-12 d-flex justify-content-between align-items-center"
                >
                  <span
                    className="badge badge-danger"
                    id={item.catName}
                    onClick={() => {
                      deleteCategory(item.catName);
                    }}
                  >
                    <i className="fa fa-trash"></i>
                  </span>
                  <span
                    className="badge badge-success"
                    id={item.catName}
                    onClick={() => {
                      editCategory(item.catName);
                    }}
                  >
                    <i className="fa fa-eye"></i>
                  </span>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
