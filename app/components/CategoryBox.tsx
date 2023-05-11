'use client'

import React, {useCallback} from 'react';
import {useRouter, useSearchParams} from "next/navigation";
import qs from 'query-string'
import {IconType} from "react-icons";

interface CategoryBoxProps {
  icon: IconType
  label: string
  selected?: boolean
}

const CategoryBox: React.FC<CategoryBoxProps> = (
  {
    icon: Icon,
    label,
    selected
  }) => {
  const router = useRouter()
  const params = useSearchParams()
  /**카테고리 클릭 핸들러*/
  const handleClick = useCallback(() => {
    let currentQuery = {}
    /**params 가 있으면 currentQuery 에 params 를 저장한다.*/
    if (params) {
      currentQuery = qs.parse(params.toString());
    }
    /**updatedQuery 는 category 를 가지고 있다.*/
    const updatedQuery: any = {
      ...currentQuery,
      category: label
    }
    /**선택된 카테고리를 다시 클릭하면 선택이 취소된다.*/
    if (params?.get('category') === label) {
      delete updatedQuery.category
    }
    /**updatedQuery 를 포함한 url 을 만들어 push 한다.*/
    const url = qs.stringifyUrl({
      url: '/',
      query: updatedQuery
    }, {skipNull: true})

    router.push(url)
  }, [label, params, router])

  return (
    <div
      onClick={handleClick}
      className={`
      flex flex-col items-center gap-2 p-3 border-b-2 hover:text-neutral-800 transition cursor-pointer
      ${selected ? 'border-b-neutral-800' : 'bg-transparent'}
      ${selected ? 'text-neutral-800' : 'text-neutral-500'} 
      `}
    >
      <Icon size={26}/>
      <div className={'font-medium text-sm'}>
        {label}
      </div>
    </div>
  )
};

export default CategoryBox;