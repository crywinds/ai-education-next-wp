'use client'

import { useState, useEffect, useCallback } from 'react'
import { Search, X } from 'lucide-react'
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Button } from '@/components/ui/button'
import { useDebounce } from '@/lib/hooks'

interface ResourceSearchProps {
  onSearch: (query: string, categoryId?: number) => void
  categories: Array<{ id: number; name: string; slug: string }>
  isLoading?: boolean
}

export default function ResourceSearch({
  onSearch,
  categories,
  isLoading = false,
}: ResourceSearchProps) {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState<string>('all')
  const debouncedSearch = useDebounce(searchQuery, 300)

  useEffect(() => {
    const categoryId = selectedCategory === 'all' ? undefined : parseInt(selectedCategory)
    onSearch(debouncedSearch, categoryId)
  }, [debouncedSearch, selectedCategory, onSearch])

  const handleClear = () => {
    setSearchQuery('')
    setSelectedCategory('all')
  }

  const hasFilters = searchQuery || selectedCategory !== 'all'

  return (
    <div className="space-y-4">
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
          <Input
            type="text"
            placeholder="搜尋資源..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 pr-10"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>
        <Select value={selectedCategory} onValueChange={setSelectedCategory}>
          <SelectTrigger className="w-full sm:w-[200px]">
            <SelectValue placeholder="所有分類" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">所有分類</SelectItem>
            {categories.map((category) => (
              <SelectItem key={category.id} value={category.id.toString()}>
                {category.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      {hasFilters && (
        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="sm"
            onClick={handleClear}
            className="h-8"
          >
            <X className="w-4 h-4 mr-1" />
            清除篩選
          </Button>
        </div>
      )}
    </div>
  )
}

