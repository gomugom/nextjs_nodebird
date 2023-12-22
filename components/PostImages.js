import React from 'react'
import PropTypes from 'prop-types'

const PostImages = ({ images }) => {
  return (
    <div style={{marginBottom: '10px'}}>구현중...</div>
  )
}

PostImages.propTypes = {
    images: PropTypes.arrayOf(PropTypes.object),
}

export default PostImages