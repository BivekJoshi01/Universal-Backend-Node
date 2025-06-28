import React, { useState } from "react";
import { Button } from "../../../../../components/Button/button";
import { Input } from "../../../../../components/RenderInput/Fields/input";
import { Tabs, TabsList, TabsTrigger } from "../../../../../components/ui/tabs";
import { BiSolidMessageSquareError } from "react-icons/bi";
import { Popover, PopoverContent, PopoverTrigger } from "../../../../../components/ui/popover";

const ProductCardUI: React.FC<any> = ({ pm }) => {
    const [quantity, setQuantity] = useState(0);
    const [remarks, setRemarks] = useState("");

    const [selectedTab, setSelectedTab] = useState(
        pm?.unitOfMeasurement?.unitCategory
    );

    const [productPrice, setProductPrice] = useState(() => {
        return pm?.unitOfMeasurement?.unitCategory === selectedTab
            ? pm?.salePrice
            : pm?.perUnitPrice;
    });
    console.log(productPrice)

    const increaseQuantity = () => setQuantity((prev) => prev + 1);
    const decreaseQuantity = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

    const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;

        if (value === "") {
            setQuantity(0);
            return;
        }

        const parsed = parseInt(value, 10);
        if (!isNaN(parsed) && parsed >= 0) {
            setQuantity(parsed);
        }
    };

    return (
        <div className="max-w-sm rounded-2xl shadow-lg p-5 bg-white hover:shadow-xl transition duration-300">
            {/* Product Name */}
            <h2 className="text-lg font-semibold mb-3 text-gray-800 flex items-center gap-1.5">
                {pm?.productName}
                <Popover>
                    <PopoverTrigger>
                        <BiSolidMessageSquareError className="text-orange-300" />
                    </PopoverTrigger>
                    <PopoverContent>Place content for the popover here.</PopoverContent>
                </Popover>
            </h2>

            {/* Price & Unit */}
            <div className="flex items-center justify-between mb-4">
                <span className="font-bold text-xl">
                    Rs. {productPrice}
                </span>
                <Tabs
                    value={selectedTab}
                    onValueChange={(val) => {
                        setSelectedTab(val);

                        if (val === pm?.unitOfMeasurement?.unitCategory) {
                            setProductPrice(pm?.salePrice);
                        } else if (val === pm?.unitOfMeasurement?.baseUnit) {
                            setProductPrice(pm?.perUnitPrice);
                        }
                    }}
                >
                    <TabsList>
                        <TabsTrigger value={pm?.unitOfMeasurement?.unitCategory}>
                            {pm?.unitOfMeasurement?.unitCategory}
                        </TabsTrigger>
                        <TabsTrigger value={pm?.unitOfMeasurement?.baseUnit}>
                            {pm?.unitOfMeasurement?.baseUnit}
                        </TabsTrigger>
                    </TabsList>
                </Tabs>
            </div>

            {/* Quantity Controls */}
            <div className="flex items-center justify-between mb-2 gap-2">
                <div className="flex items-center justify-between bg-gray-50 border border-gray-300 rounded-full overflow-hidden shadow-sm w-full">
                    <button
                        onClick={decreaseQuantity}
                        className="px-3 py-1 text-gray-600 hover:bg-gray-200"
                    >
                        −
                    </button>
                    <input
                        value={quantity}
                        onChange={handleQuantityChange}
                        className="w-16 text-center bg-transparent outline-none text-gray-800 font-medium"
                        min={0}
                    />
                    <button
                        onClick={increaseQuantity}
                        className="px-3 py-1 text-gray-600 hover:bg-gray-200"
                    >
                        +
                    </button>
                </div>

                <Button>
                    Add to Cart
                </Button>
            </div>

            {/* Remarks/Input Field */}
            <div>
                <Input
                    value={remarks}
                    onChange={(e: any) => setRemarks(e.target.value)}
                    placeholder="Enter any remarks..."
                    className="w-full"
                />
            </div>
        </div>
    );
};

export default ProductCardUI;
