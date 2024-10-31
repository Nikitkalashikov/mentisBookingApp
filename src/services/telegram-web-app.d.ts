interface Window {
	Telegram: {
		WebApp: {
			initData: string
			initDataUnsafe: {
				user: {
					id: string
					first_name: string
					last_name: string
					is_bot: boolean
					is_premium: boolean
					username: string
					photo_url: string
				}
				start_param: string
			}
			isExpanded: boolean
			HapticFeedback: {
				impactOccurred: (type: string) => VoidFunction
				selectionChanged: () => VoidFunction
			}
			themeParams: {
				bg_color: string
				header_bg_color: string
			}
			ready: () => VoidFunction
			expand: () => VoidFunction
			setHeaderColor: () => VoidFunction
			requestContact: () => VoidFunction
			showAlert: (message: string) => VoidFunction
			CloudStorage: {
				getItem: (key: string, callback: (value: string | null) => void) => void
				setItem: (key: string, value: string, callback?: () => void) => void
			}
			onEvent(
				eventType: "contactRequested",
				eventHandler: (
					eventData:
						| RequestContactCallBack["Cancelled"]
						| RequestContactCallBack["Sent"]
				) => void
			): void
			offEvent(
				eventType: "contactRequested",
				eventHandler: (
					eventData:
						| RequestContactCallBack["cancelled"]
						| RequestContactCallBack["sent"]
				) => void
			): void
		}
		WebView: {
			receiveEvent(
				eventType: "custom_method_invoked",
				eventHandler: (req_id: string, result: string) => void
			): VoidFunction
			receiveEvent(
				eventType: "phone_requested",
				eventHandler: (
					eventData:
						| RequestContactCallBack["cancelled"]
						| RequestContactCallBack["sent"]
				) => VoidFunction
			): VoidFunction
			receiveEvent(
				eventType: "web_app_invoke_custom_method",
				eventHandler: (req_id: string, result: string) => void
			): void
		}
	}
}
