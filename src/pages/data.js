import React from 'react'
import {useStaticQuery} from 'gatsby'
function Data() {
    const getData = useStaticQuery(graphql`
    {
      allContentfulDemo {
        edges {
          node {
            title
            image {
              fluid {
                src
              }
            }
            description {
              description
            }
          }
        }
      }
    }
  `)
  const data = getData.allContentfulDemo.edges;
    return (
        <div>
            {data.map((item) => {
                return(
                    <div>
                        <h2>{item.node.title}</h2>
                        <img src={item.node.image.fluid.src}/>
                        <p>{item.node.description.description}</p>
                    </div>
                )
                 } )}
        </div>
    )
}

export default Data
