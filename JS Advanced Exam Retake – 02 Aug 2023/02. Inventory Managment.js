class InventoryManager {
    constructor(capacity) {
        this.capacity = capacity;
        this.items = [];
        this.outOfStock = [];
    }
    addItem(itemName, quantity) {
        if (quantity <= 0) {
            throw new Error("Quantity must be greater than zero.");
        }

        if (this.items.length >= this.capacity) {
            throw new Error("The inventory is already full.");
        }

        const itemIndex = this.items.findIndex(item => item.itemName === itemName);
        if (itemIndex !== -1) {
            this.items[itemIndex].quantity += quantity;
            return `Added ${quantity} ${itemName}(s) to the inventory.`;
        } else {
            this.items.push({ itemName, quantity });
            return `Added ${quantity} ${itemName}(s) to the inventory.`;
        }
    }

    sellItem(itemName, quantity) {
        if (quantity <= 0) {
            throw new Error("Quantity must be greater than zero.");
        }

        const itemIndex = this.items.findIndex(item => item.itemName === itemName);
        if (itemIndex === -1) {
            throw new Error(`The item ${itemName} is not available in the inventory.`);
        }

        const availableQuantity = this.items[itemIndex].quantity;
        if (quantity > availableQuantity) {
            throw new Error(`Not enough ${itemName}(s) in stock.`);
        }

        this.items[itemIndex].quantity -= quantity;

        if (this.items[itemIndex].quantity === 0) {
            this.items.splice(itemIndex, 1);
            this.outOfStock.push({ itemName });
        }

        return `Sold ${quantity} ${itemName}(s) from the inventory.`;
    }
    restockItem(itemName, quantity) {
        if (quantity <= 0) {
            throw new Error("Quantity must be greater than zero.");
        }

        const itemIndex = this.items.findIndex(item => item.itemName === itemName);
        if (itemIndex !== -1) {
            this.items[itemIndex].quantity += quantity;
        } else {
            this.items.push({ itemName, quantity });
        }

        // Check if the item exists in the outOfStock array and remove it
        const outOfStockIndex = this.outOfStock.findIndex(item => item.itemName === itemName);
        if (outOfStockIndex !== -1) {
            this.outOfStock.splice(outOfStockIndex, 1);
        }

        return `Restocked ${quantity} ${itemName}(s) in the inventory.`;
    }
    getInventorySummary() {
        let summary = "Current Inventory:\n";

        for (const item of this.items) {
            summary += `${item.itemName}: ${item.quantity}\n`;
        }

        if (this.outOfStock.length > 0) {
            const outOfStockItems = this.outOfStock.map(item => item.itemName).join(', ');
            summary += `Out of Stock: ${outOfStockItems}`;
        }

        return summary;
    }
}
const manager = new InventoryManager(3);

console.log(manager.addItem("Drill", 10));
console.log(manager.addItem("Hammer", 5));
console.log(manager.addItem("Chisel", 3));
console.log(manager.sellItem("Drill", 3));
console.log(manager.sellItem("Hammer", 5));
console.log(manager.restockItem("Drill", 5));
console.log(manager.restockItem("Paintbrush", 1));
console.log(manager.getInventorySummary());