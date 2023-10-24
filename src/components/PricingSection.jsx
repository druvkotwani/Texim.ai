import Card from "./Card"

const PricingSection = () => {
    return (
        <div className="flex flex-col items-center py-16 px-24 gap-8 self-stretch">
            {/* Pricing TExt */}
            <div className="flex flex-col justify-center items-center p-6 gap-4 self-stretch">
                {/* Here goes the text */}
                <h1 className="text-brand-off-white text-5xl font-extrabold leading-normal">Flexible Pricing for Everyone</h1>
                <p className="text-brand-off-white text-center text-lg font-normal leading-normal ">Unlock Your Creative Potential with Our Tailored Plans</p>
            </div>

            {/* Pricing Menu */}
            <div className="flex p-6 justify-between items-start self-stretch">
                <Card key={0} background="bg-brand-green" shadow="rgba(43, 205, 148, 0.50)" />
                <Card key={1} background="bg-brand-light-purple" shadow="rgba(128, 128, 242, 0.50)" />
                <Card key={2} background="bg-brand-pink-7" shadow="rgba(236, 39, 182, 0.50)" />

            </div>

        </div>

    )
}

export default PricingSection