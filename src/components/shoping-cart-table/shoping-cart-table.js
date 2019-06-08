import { Button, Icon, Table } from "semantic-ui-react";
import React from "react";


const ShopingCartTable = ({
  items,
  total,
  onIncrease,
  onDecrease,
  onRemove
}) => {
  return (
    <Table celled>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell width={1}>Id</Table.HeaderCell>
          <Table.HeaderCell width={6}>Name</Table.HeaderCell>
          <Table.HeaderCell width={1}>Count</Table.HeaderCell>
          <Table.HeaderCell width={1}>Total(${total})</Table.HeaderCell>
          <Table.HeaderCell width={2}>Actions</Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {items.map((item, id) => {
          return (
            <Table.Row key={item.id}>
              <Table.Cell>{id + 1}</Table.Cell>
              <Table.Cell>{item.title}</Table.Cell>
              <Table.Cell>{item.count}</Table.Cell>
              <Table.Cell>${item.total}</Table.Cell>
              <Table.Cell>
                <Button
                  basic
                  color="yellow"
                  onClick={() => onDecrease(item.id)}
                >
                  <Icon fitted name="minus" />
                </Button>
                <Button basic color="green" onClick={() => onIncrease(item.id)}>
                  <Icon fitted name="plus" />
                </Button>
                <Button basic color="red" onClick={() => onRemove(item.id)}>
                  <Icon fitted name="trash alternate" />
                </Button>
              </Table.Cell>
            </Table.Row>
          );
        })}
      </Table.Body>
    </Table>
  );
};

export default ShopingCartTable
