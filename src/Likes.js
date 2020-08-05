import React from "react";
import Table from "react-bootstrap/Table";
// npm install --save-dev @iconify/react @iconify/icons-bx
import { Icon, InlineIcon } from "@iconify/react";
import bxLike from "@iconify/icons-bx/bx-like";

class Likes extends React.Component {
  clickHandler(event) {
    console.log(this.props.postId);
    this.props.likeaction(this.props.postId);
  }

  render() {
    return (
      <>
        <Table>
          <tbody>
            <tr>
              <td>
                <Icon
                  onClick={() => this.clickHandler()}
                  fluid
                  className="mx-auto"
                  icon={bxLike}
                  width="25px"
                  alt="like logo"
                />
              </td>
              <td>{this.props.no}</td>
            </tr>
          </tbody>
        </Table>
      </>
    );
  }
}

export default Likes;
