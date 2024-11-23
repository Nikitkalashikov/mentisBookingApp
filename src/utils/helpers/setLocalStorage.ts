interface IStorage {
	key: string
	value: string
	expiryTimeInMs: number
}

export const setLocalStorageItemWithExpiry = ({
	key,
	value,
	expiryTimeInMs = 300000,
}: IStorage) => {
	const item = {
		value: value,
		expiry: Date.now() + expiryTimeInMs,
	}
	localStorage.setItem(key, JSON.stringify(item))
}
