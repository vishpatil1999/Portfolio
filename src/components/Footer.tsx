export default function Footer() {
    return (
        <div className="mt-20">
            <div className="text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-3">
                <p>© {new Date().getFullYear()} <a href="https://prebuiltui.com">Vishakha Patil </a>. All rights reserved.</p>
                <ul className="flex items-center gap-10 justify-center mt-4 sm:mt-0">
                    <li><a target='_blank' href="https://github.com/vishpatil1999">GitHub</a></li>
                    <li><a target='_blank' href="https://www.linkedin.com/in/vishakha-patil-4437a01b1/">LinkedIn</a></li>
                </ul>
            </div>
        </div>
    )
}