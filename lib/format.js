const format = (val, type) => {
    if(type === "percent") {
        return new Intl.NumberFormat('en-US', { style: 'percent', maximumFractionDigits: 1 }).format(val);
    } else if (type === "dollar") {
        return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(val);
    } else if (type === "number") {
        return new Intl.NumberFormat('en-US').format(val);
    } else if (type === "date") {
        return new Date(val).toLocaleDateString();
    } else if (type === "monthShort") {
        return new Date(val).toLocaleDateString("en-US", { month: "short" });
    } else if (type === "monthLong") {
        return new Date(val).toLocaleDateString("en-US", { month: "long" });
    } else if (type === "year") {
        return new Date(val).toLocaleDateString("en-US", { year: "numeric" });
    } else {
        return val;
    }
}

export default format;
