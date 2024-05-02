// Imports
import { InvalidateCacheProps } from "../types/types.js";
import { redisClient } from "../config/redis.config.js";

const InvalidateCache = ({
  product,
  order,
  productId,
  orderId,
  userId,
  admin,
}: InvalidateCacheProps) => {

  // If product is true, then we will delete the cache of the following keys
  if (product) {
    const productKeys: string[] = [
      "categories",
      "all-products",
      "lastest-products",
    ];

    // If productId is an array, then we will loop through the array and delete the cache of each product
    if (productId) {
      if (Array.isArray(productId)) {
        productId.forEach((id) => {
          productKeys.push(`product:${id}`);
        });
      } else {
        productKeys.push(`product:${productId}`);
      }
    }

    // Deleting the cache of the product keys
    redisClient.del(productKeys);
  }

  // If order is true, then we will delete the cache of the following keys
  if (order) {
    const orderKeys: string[] = [
      `my-orders-${userId}`,
      "all-orders",
      `order:${orderId}`,
    ];

    // Deleting the cache of the order keys
    redisClient.del(orderKeys);
  }

  // If admin is true, then we will delete the cache of the following keys
  if (admin) {
    const adminKeys: string[] = [
      "admin-stats",
      "admin-pie-charts",
      "admin-bar-charts",
      "admin-line-charts",
    ];

    // Deleting the cache of the admin keys
    redisClient.del(adminKeys);
  }
};

export { InvalidateCache };