import { ReactNode } from 'react'

const FakeTerminalWindow = ({ children }: { children: ReactNode }) => {
    return (
        <div className="w-5/6 md:max-w-screen-sm mx-auto md:w-full rounded-xl shadow-lg text-lg border border-black/20">
            {/* top bar */}
            <div className="flex bg-base-200 py-2 px-4 rounded-t-xl gap-2">
                <div className="bg-error h-4 w-4 rounded-full" />
                <div className="bg-warning h-4 w-4 rounded-full" />
                <div className="bg-success h-4 w-4 rounded-full" />
            </div>
            {/* bottom content */}
            <div className="bg-base-300 p-6 rounded-b-xl">
                <div className="space-y-4 space">{children}</div>
            </div>
        </div>
    )
}

export default FakeTerminalWindow