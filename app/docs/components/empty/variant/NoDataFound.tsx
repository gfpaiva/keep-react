'use client'
import Image from 'next/image'
import { Empty } from '~/src'

const NoDataFound = () => {
  return (
    <Empty>
      <Empty.Image>
        <Image
          src="https://staticmania.cdn.prismic.io/staticmania/16994ca5-ac01-4868-8ade-1b9e276ccdb3_Property+1%3DFolder_+Property+2%3DLg.svg"
          height={234}
          width={350}
          alt="404"
        />
      </Empty.Image>
      <Empty.Title>No Data Found</Empty.Title>
      <Empty.Description>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry.
      </Empty.Description>
      <Empty.Redirect buttonText="Go to Home" redirectUrl="/" />
    </Empty>
  )
}

const NoDataFoundCode = `
"use client";
import Image from "next/image";
import { Empty } from "keep-react";

export const EmptyComponent = () => {
  return (
    <Empty>
      <Empty.Image>
        <Image
          src="https://staticmania.cdn.prismic.io/staticmania/16994ca5-ac01-4868-8ade-1b9e276ccdb3_Property+1%3DFolder_+Property+2%3DLg.svg"
          height={234}
          width={350}
          alt="404"
        />
      </Empty.Image>
      <Empty.Title>No Data Found</Empty.Title>
      <Empty.Description>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry.
      </Empty.Description>
      <Empty.Redirect buttonText="Go to Home" redirectUrl="/" />
    </Empty>
  )
}
`

export { NoDataFound, NoDataFoundCode }
