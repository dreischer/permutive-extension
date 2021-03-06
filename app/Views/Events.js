import React, { Component } from 'preact'
import { Consumer } from 'tiny-atom/preact'
import List from '../components/List'

export default class Events extends Component {
  render (props, state) {
    const map = function (state) {
      return {
        items: state.data.events.items.map(mapEvent),
        filter: state.data.events.filter
      }
    }
    return (
      <Consumer map={map} >
        {({ items, filter, dispatch }) => (
          <List items={items} filter={filter} setFilter={function (value) {
            dispatch('setFilter', { type: 'events', value })
          }} title='Events' />
        )}
      </Consumer>
    )
  }
}

function mapEvent (item) {
  // fix for LinkClick events coming through as strings
  if (typeof item === 'string') {
    try {
      item = JSON.parse(item)
    } catch (e) {}
  }
  return {
    name: item.name,
    subtitle: item.time && new Date(item.time).toLocaleString(),
    payload: item
  }
}
