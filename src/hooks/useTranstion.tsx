import React, { useState, useTransition } from "react";
import { Input, Flex, List } from "antd";

interface Item {
  id: number;
  name: string;
  address: string;
}
function UseTransition() {
  const [inputVal, setInputVal] = useState("");
  const [list, setList] = useState<Item[]>([]);
  const [isPending, startTransition] = useTransition(); // 开始过渡

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputVal(value);
    fetch(`/api/list?keyWord=${value}`)
      .then((res) => res.json())
      .then((data) => {
        const res = data?.list ?? [];
        startTransition(() => {
          setList([...res]);
        });
      });
  };

  return (
    <>
      <Flex>
        <input
          value={inputVal}
          onChange={handleInputChange}
          placeholder="请输入姓名"
        />
      </Flex>
      {isPending && <div>loading...</div>}
      <List
        bordered
        dataSource={list}
        renderItem={(item) => (
          <List.Item>
            <List.Item.Meta title={item.name} description={item.address} />
          </List.Item>
        )}
      />
    </>
  );
}

export default UseTransition;
