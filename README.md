# Blob Transaction Sending Tutorial

## Transaction types 

[Legacy(0x0)](https://sepolia.etherscan.io/tx/0x4ae041b02ffcb2ce9091aae5f2fbbbc2ac1d18c08d0963f369751ec8c23e20e5)
 - Legacy 트랜잭션은 가스 가격(gasPrice)을 수동으로 설정하여 네트워크 사용료를 지불합니다. 이 타입은 EIP-1559 이전의 표준 방식으로, 사용자는 트랜잭션을 처리할 가스의 가격을 직접 제안합니다.
 - Legacy transactions allow users to manually set the gas price (gasPrice) they are willing to pay for network processing. This was the standard transaction type before the introduction of EIP-1559, where users directly proposed the gas price for their transactions to be processed.

[EIP-2980(0x1)](https://sepolia.etherscan.io/tx/0x8991cf7e4b3e5cc02a81a6dd080027093299c717b2bccd6fb4060e2707b57a20)
 - EIP-2930은 "액세스 리스트"를 도입하여 특정 주소와 스토리지 키의 목록을 제공함으로써 가스 비용을 줄이고, 트랜잭션 처리를 효율화하는 개선된 트랜잭션 타입입니다. 이 타입은 특히 스마트 계약을 실행할 때 발생할 수 있는 가스 비용을 최적화합니다.
 - EIP-2930 introduces "access lists" that provide a list of addresses and storage keys, which help reduce gas costs and optimize transaction processing. This type is particularly beneficial for optimizing gas expenses when executing smart contracts.

[EIP-1559(0x2)](https://sepolia.etherscan.io/tx/0x51e23f981099389f29a0c32963751ecf37feeef89761f9e645e200bd5ad0c065)
 -  EIP-1559 트랜잭션은 baseFeePerGas 및 maxPriorityFeePerGas를 도입하여 트랜잭션 수수료 모델을 개선합니다. 이 구조는 네트워크의 혼잡 상태에 따라 수수료가 동적으로 조정되어, 사용자가 네트워크의 현재 상태를 더 잘 반영한 가스 가격을 제시할 수 있도록 합니다.
 - EIP-1559 transactions introduce baseFeePerGas and maxPriorityFeePerGas, which improve the transaction fee model. This structure allows fees to dynamically adjust based on network congestion, enabling users to propose gas prices that better reflect the current state of the network.

[EIP-4844(0x3)](https://sepolia.etherscan.io/tx/0xd062e43e647a2a47212a956bff3ea460c553c8956e5d4a91b20652c8d26c9175)
 - EIP-4844은 이더리움의 데이터 처리량과 확장성을 개선하기 위해 설계된 트랜잭션 타입입니다. 이는 "blob" 데이터를 사용하여 레이어 1에서 대규모 데이터 처리를 가능하게 함으로써, 레이어 2 솔루션을 보완하고 전체 네트워크의 처리량을 증가시키는 것을 목표로 합니다.
 - EIP-4844 is designed to improve Ethereum's data throughput and scalability by using "blob" data to enable large-scale data processing at Layer 1, complementing Layer 2 solutions and increasing overall network throughput.

## Usage 
