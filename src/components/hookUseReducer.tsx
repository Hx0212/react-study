import { useReducer, useState } from "react";

function StudyUseReducer() {
  const initData = [
    { name: "小满(只)", price: 100, count: 1, id: 1, isEdit: false },
    { name: "中满(只)", price: 200, count: 1, id: 2, isEdit: false },
    { name: "大满(只)", price: 300, count: 1, id: 3, isEdit: false },
  ];
  type Data = typeof initData;
  type Action = {
    type: "add" | "sub" | "edit" | "delete" | "update_name";
    id: number;
    name?: string;
  };
  const reducer = (state: Data, action: Action) => {
    const item = state.find((item) => item.id === action.id)!;
    switch (action.type) {
      case "add":
        item.count++;
        return [...state];
      case "sub":
        item.count--;
        return [...state];
      case "edit":
        item.isEdit = !item.isEdit;
        return [...state];
      case "delete":
        return state.filter((item) => item.id !== action.id);
      case "update_name":
        item.name = action.name!;
        return [...state];
      default:
    }
    return state;
  };
  const [data, dispatch] = useReducer(reducer, initData);

  return (
    <div>
      {/* <h1>购物车</h1> */}
      <table cellPadding={0} cellSpacing={0} border={1} width={800}>
        <thead>
          <tr>
            <th>商品</th>
            <th>单价</th>
            <th>数量</th>
            <th>总价</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => {
            return (
              <tr key={item.id}>
                <td align="center">
                  {item.isEdit ? (
                    <input
                      aria-label="商品名称"
                      onBlur={() => dispatch({ type: "edit", id: item.id })}
                      onChange={(e) =>
                        dispatch({
                          type: "update_name",
                          id: item.id,
                          name: e.target.value,
                        })
                      }
                      value={item.name}
                    />
                  ) : (
                    <span>{item.name}</span>
                  )}
                </td>
                <td align="center">{item.price}</td>
                <td align="center">
                  <button
                    onClick={() => dispatch({ type: "add", id: item.id })}
                  >
                    +
                  </button>
                  {item.count}
                  <button
                    onClick={() => dispatch({ type: "sub", id: item.id })}
                  >
                    -
                  </button>
                </td>
                <td align="center">{item.price * item.count}</td>
                <td align="center">
                  <button
                    onClick={() => dispatch({ type: "edit", id: item.id })}
                  >
                    编辑
                  </button>
                  <button
                    onClick={() => dispatch({ type: "delete", id: item.id })}
                  >
                    删除
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan={4}></td>
            <td align="center">
              总价:{data.reduce((a, b) => a + b.price * b.count, 0)}
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}

export default StudyUseReducer;
